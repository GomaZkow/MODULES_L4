const sortString = strings => strings.sort((a, b) =>
    a.split(' ').join('').localeCompare(b.split(' ').join(''))
);
module.exports = {sortString};
