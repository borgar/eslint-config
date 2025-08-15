import stylistic from '@stylistic/eslint-plugin';

type Severity = 0 | 1 | 2;
type SeverityString = 'error' | 'off' | 'warn';
type RuleLevel = Severity | SeverityString;
type RuleLevelAndOptions = [RuleLevel, ...unknown[]];
type RuleEntry = RuleLevel | RuleLevelAndOptions;
type Rules = Record<string, RuleEntry>;
type ESConfig = {
    plugins?: Record<string, typeof stylistic>;
    rules?: Rules;
};
type StyleOpts = {
    commaDangle?: boolean;
    singleBlocks?: boolean;
    lineLength?: null | number | number[];
};
declare const _default: {
    config: {
        jsdoc: {
            rules: Rules;
        };
        recommended: {
            rules: Rules;
        };
        stylistic: (opts: StyleOpts) => ESConfig;
    };
};

export { _default as default };
