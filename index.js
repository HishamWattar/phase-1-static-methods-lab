class Formatter {
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    static sanitize(string) {
        return string.replace(/[^A-Za-z '-]/g, '')
    }

    static titleize(string) {
        const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
        const words = string.split(' ')
        return words.map(function (item) {
            if (!exceptions.includes(item) || words.indexOf(item) === 0) {
                return item.charAt(0).toUpperCase() + item.slice(1)
            }
            return item
        }).join(' ')
    }
}