/**
 * Parser for log type 02
 */
class Parser02 extends BaseParser {
    /**
     * Parse a log line of type 02
     * @param {string} logLine - The original log line
     * @returns {string} - The parsed result
     */
    parse(logLine) {
        return `test: 02 ${logLine}`;
    }
}
