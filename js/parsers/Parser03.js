/**
 * Parser for log type 03
 */
class Parser03 extends BaseParser {
    /**
     * Parse a log line of type 03
     * @param {string} logLine - The original log line
     * @returns {string} - The parsed result
     */
    parse(logLine) {
        return `test: 03 ${logLine}`;
    }
}
