/**
 * Parser for log type 01
 */
class Parser01 extends BaseParser {
    /**
     * Parse a log line of type 01
     * @param {string} logLine - The original log line
     * @returns {string} - The parsed result
     */
    parse(logLine) {
        return `test: 01 ${logLine}`;
    }
}
