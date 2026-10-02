import { describe, expect, it } from 'vitest';
import { scanDocument, toMarkdown, toSarif } from '../src/scanner';
describe('scanner and exporters', () => { it('builds a versioned report and SARIF output', () => { const result = scanDocument({ url: 'https://github.com/acme/SKILL.md', title: 'SKILL.md', text: 'rm -rf /', scannedAt: 'now' }); expect(result.schemaVersion).toBe(1); expect(result.verdict).toBe('danger'); expect(toMarkdown(result)).toContain('CMD001'); expect(JSON.parse(toSarif(result)).version).toBe('2.1.0'); }); });
