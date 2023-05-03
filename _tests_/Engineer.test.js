const Engineer = require('../lib/Engineer');


test('new Engineer will return user input name', () => {
    const test = new Engineer('Henry', 22, 'henry@gmail.com', 'Henry')
    
    expect(test.getName()).toBe('Henry')
})
