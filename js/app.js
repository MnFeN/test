/**
 * Main application logic for log parser
 */

// Initialize parsers
const parsers = {
    1: new Parser01(),
    2: new Parser02(),
    3: new Parser03()
};

/**
 * Process log lines and generate explanations
 */
function processLogLines() {
    const inputElement = document.getElementById('logInput');
    const outputElement = document.getElementById('logOutput');
    
    const inputText = inputElement.value;
    const lines = inputText.split('\n');
    
    const results = [];
    
    for (const line of lines) {
        // Skip blank lines
        if (!line.trim()) {
            continue;
        }
        
        // Extract first two characters
        const prefix = line.substring(0, 2);
        
        // Check if it's a valid hexadecimal number
        if (/^[0-9A-Fa-f]{2}$/.test(prefix)) {
            // Convert hex to int
            const typeNumber = parseInt(prefix, 16);
            
            // Find the appropriate parser
            const parser = parsers[typeNumber];
            
            if (parser) {
                // Parse the log line
                const result = parser.parse(line);
                results.push(result);
            } else {
                // No parser found for this type
                results.push(`未知类型: ${typeNumber} ${line}`);
            }
        } else {
            // Invalid format
            results.push(`无效格式: ${line}`);
        }
    }
    
    // Display results
    outputElement.value = results.join('\n');
}

// Set up event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const convertButton = document.getElementById('convertButton');
    convertButton.addEventListener('click', processLogLines);
});
