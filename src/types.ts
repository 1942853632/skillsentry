export type Severity = 'info' | 'low' | 'medium' | 'high';
export type FindingCategory = 'prompt-injection' | 'command-execution' | 'credential-access' | 'data-exfiltration' | 'mcp-config' | 'obfuscation';
export type Finding = { ruleId: string; severity: Severity; category: FindingCategory; title: string; line: number; evidence: string; remediation: string };
export type ScanResult = { schemaVersion: 1; target: { url: string; title: string }; scannedAt: string; score: number; verdict: 'safe' | 'review' | 'danger'; findings: Finding[] };
