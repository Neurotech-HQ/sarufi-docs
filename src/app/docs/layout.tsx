import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const { nav, ...base } = baseOptions();

  return (
    // Notebook layout with a full-width top header, so View Site, Docs and the
    // GitHub icon sit at the top right as on the home page.
    <DocsLayout tree={source.getPageTree()} {...base} nav={{ ...nav, mode: 'top' }}>
      {children}
    </DocsLayout>
  );
}
