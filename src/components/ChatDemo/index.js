import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css';

const SCENARIOS = [
  {
    label: 'WhatsApp Integration',
    messages: [
      { msg: 'How do I connect my WhatsApp number?', user: true },
      {
        msg: 'POST to /chatbots/{id}/integrations/whatsapp with your Meta Phone ID, WABA ID & access token. Live in seconds 🚀',
        user: false,
        replyTo: { name: 'You', text: 'How do I connect my WhatsApp number?' },
      },
      { msg: 'What about incoming messages?', user: true },
      {
        msg: 'Sarufi handles the webhook automatically - your published flow picks up every inbound message and replies instantly ⚡',
        user: false,
        replyTo: { name: 'You', text: 'What about incoming messages?' },
      },
    ],
  },
  {
    label: 'Flow & Backend API',
    messages: [
      { msg: 'How do API_CALL actions work?', user: true },
      {
        msg: 'Add an API_CALL to any state - it hits your endpoint, saves the response as {{variables.result}}, then routes on success or failure 🔗',
        user: false,
        replyTo: { name: 'You', text: 'How do API_CALL actions work?' },
      },
      { msg: 'Can I pass user context to my server?', user: true },
      {
        msg: 'Yes! X-Sarufi-User-Id, channel, and all flow variables are auto-injected. Your server always knows exactly who is messaging 🎯',
        user: false,
        replyTo: { name: 'You', text: 'Can I pass user context to my server?' },
      },
    ],
  },
  {
    label: 'Knowledge Bases',
    messages: [
      { msg: 'How do I upload documents to a KB?', user: true },
      {
        msg: 'POST to /knowledge-bases/{id}/sources - attach a PDF, URL, or raw text. The platform indexes it automatically 📄',
        user: false,
        replyTo: { name: 'You', text: 'How do I upload documents to a KB?' },
      },
      { msg: 'How do I attach it to my chatbot?', user: true },
      {
        msg: 'PATCH /chatbots/{id} with knowledge_base_ids. Your bot searches the KB on every query - no extra prompting needed ✅',
        user: false,
        replyTo: { name: 'You', text: 'How do I attach it to my chatbot?' },
      },
    ],
  },
];

const TYPING_SPEED = 42;
const BOT_THINKING_TIME = 850;
const PAUSE_AFTER_DONE = 3000;
const FADE_DURATION = 350;

function ReadCheck({ read }) {
  const color = read ? '#53BDEB' : '#8696A0';
  return (
    <svg width="14" height="10" viewBox="0 0 16 11" fill="none" style={{ flexShrink: 0 }}>
      <path d="M1.5 5.5L5 9L10.5 2" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 5.5L9.5 9L15 2" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TypingIndicator() {
  return (
    <div className={styles.typingWrap}>
      {[0, 0.15, 0.3].map((delay, i) => (
        <motion.span
          key={i}
          className={styles.dot}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.7, repeat: Infinity, delay }}
        />
      ))}
    </div>
  );
}

export default function ChatDemo() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [phase, setPhase] = useState({ type: 'idle' });
  const [inputText, setInputText] = useState('');
  const [contentKey, setContentKey] = useState(0);
  const chatContentRef = useRef(null);

  const scenario = SCENARIOS[scenarioIdx];
  const messages = scenario.messages;

  // nextScenario: fade out → swap → fade in. No abrupt jumps.
  const nextScenario = useCallback(() => {
    setPhase({ type: 'fading' }); // freeze the state machine
    setTimeout(() => {
      setScenarioIdx(i => (i + 1) % SCENARIOS.length);
      setVisibleCount(0);
      setInputText('');
      setContentKey(k => k + 1); // triggers AnimatePresence crossfade
      setPhase({ type: 'idle' });
    }, FADE_DURATION);
  }, []);

  useEffect(() => {
    if (phase.type === 'fading') return; // do nothing while fading
    let t;

    if (phase.type === 'idle') {
      t = setTimeout(() => {
        // All scenarios start with a user message - kick off typing immediately
        setPhase({ type: 'user-typing', charIndex: 0 });
      }, 700);
    } else if (phase.type === 'bot-sent' || phase.type === 'user-sent') {
      if (visibleCount >= messages.length) {
        setPhase({ type: 'done' });
        return;
      }
      const next = messages[visibleCount];
      if (next.user) {
        t = setTimeout(() => {
          setInputText('');
          setPhase({ type: 'user-typing', charIndex: 0 });
        }, 400);
      } else {
        t = setTimeout(() => setPhase({ type: 'bot-thinking' }), 300);
      }
    } else if (phase.type === 'user-typing') {
      const msg = messages[visibleCount].msg;
      if (phase.charIndex >= msg.length) {
        t = setTimeout(() => {
          setInputText('');
          setVisibleCount(c => c + 1);
          setPhase({ type: 'user-sent' });
        }, 300);
      } else {
        t = setTimeout(() => {
          setInputText(msg.slice(0, phase.charIndex + 1));
          setPhase({ type: 'user-typing', charIndex: phase.charIndex + 1 });
        }, TYPING_SPEED);
      }
    } else if (phase.type === 'bot-thinking') {
      t = setTimeout(() => {
        setVisibleCount(c => c + 1);
        setPhase({ type: 'bot-sent' });
      }, BOT_THINKING_TIME);
    } else if (phase.type === 'done') {
      t = setTimeout(nextScenario, PAUSE_AFTER_DONE);
    }

    return () => clearTimeout(t);
  }, [phase, visibleCount, messages, nextScenario]);

  const showTyping = phase.type === 'bot-thinking';

  // Scroll to bottom whenever a new message lands or the typing indicator appears
  useEffect(() => {
    const el = chatContentRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    }
  }, [visibleCount, showTyping]);

  return (
    // will-change: transform creates a GPU compositing layer - no repaints bleed into parent
    <div className={styles.phone} style={{ willChange: 'transform' }}>
      <div className={styles.notch} />
      <div className={styles.screen}>

        {/* Header - fixed height, never moves */}
        <div className={styles.header}>
          <div className={styles.avatar}>
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" />
              <path d="M8 12l2.5 2.5L16 9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className={styles.headerInfo}>
            <span className={styles.botName}>Sarufi Bot</span>
            <span className={`${styles.status} ${showTyping ? styles.statusTyping : ''}`}>
              {showTyping ? 'typing...' : 'online'}
            </span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={scenarioIdx}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2 }}
              className={styles.scenarioPill}
            >
              {scenario.label}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Chat area - fixed height, overflow hidden.
            Crossfade whole content on scenario switch so there's
            no flash of empty chat. Messages animate in individually
            within the stable container. */}
        <div className={styles.chatArea}>
          <AnimatePresence mode="wait">
            <motion.div
              key={contentKey}
              ref={chatContentRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: FADE_DURATION / 1000 }}
              className={styles.chatContent}
            >
              {messages.slice(0, visibleCount).map((m, i) => {
                const mins = String((i * 7) % 60).padStart(2, '0');
                const time = `${9 + Math.floor(i / 2)}:${mins}`;
                const isRead = i < visibleCount - 1;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    className={`${styles.bubble} ${m.user ? styles.bubbleUser : styles.bubbleBot}`}
                  >
                    {m.replyTo && (
                      <div className={styles.replyBlock}>
                        <span className={styles.replyName}>{m.replyTo.name}</span>
                        <span className={styles.replyText}>{m.replyTo.text}</span>
                      </div>
                    )}
                    <span className={styles.msgText}>{m.msg}</span>
                    <div className={`${styles.meta} ${m.user ? styles.metaRight : styles.metaLeft}`}>
                      <span className={styles.time}>{time}</span>
                      {m.user && <ReadCheck read={isRead} />}
                    </div>
                  </motion.div>
                );
              })}

              {showTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`${styles.bubble} ${styles.bubbleBot} ${styles.bubbleTyping}`}
                >
                  <TypingIndicator />
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Input bar - fixed height */}
        <div className={styles.inputBar}>
          <div className={`${styles.inputField} ${inputText ? styles.inputActive : ''}`}>
            <span>{inputText || 'Type a message...'}</span>
            {inputText && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className={styles.cursor}
              />
            )}
          </div>
          <div className={`${styles.sendBtn} ${inputText ? styles.sendActive : ''}`}>
            <svg viewBox="0 0 24 24" fill="none" width="15" height="15">
              <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}
