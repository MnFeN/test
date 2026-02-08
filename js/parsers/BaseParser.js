/**
 * Base class for all log parsers
 */
class BaseParser {
    /**
     * Parse a log line
     * @param {string} logLine - The original log line
     * @returns {string} - The parsed result
     */
    parse(logLine) {
        throw new Error('Parse method must be implemented by subclass');
    }
}
