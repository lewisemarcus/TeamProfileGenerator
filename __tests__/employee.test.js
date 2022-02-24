const Employee = require("../lib/employee.js")

describe('Employee class', () => {

    test('Test if Employee class returns correct information for each function: ', () => {
        const empl = new Employee('Marcus Lewis', '11111', 'lewisemarcus@gmail.com')
        expect(empl.name).toEqual(expect.any(String))
        expect(empl.id).toEqual(expect.any(Number))
        expect(empl.email).toEqual(expect.any(String))

        expect(empl.getName()).toBe(empl.name)
        expect(empl.getId()).toBe(empl.id)
        expect(empl.getRole()).toBe('Employee')
        expect(empl.getEmail()).toBe(empl.email)
    })
    test('If no information is passed through, expect error', () => {
        const cb = () => new Employee()
        const error = new Error(
            "Expected parameters 'name, id, email' to be non empty strings."
        )
        expect(cb).toThrowError(error)
    })
    test('If incorrect format information is passed through, expect error', () => {
        const cb = () => new Employee('Marcus', 'not a number', 'not an email')
        const error = new Error("Expected correct format of parameters")
        expect(cb).toThrowError(error)
    })
    test('spyon attemt', () => {
        const empl = new Employee('Marcus Lewis', '11111', 'lewisemarcus@gmail.com')
        const mock = jest.spyOn(empl, 'getEmail').mockImplementation(() => {})
        empl.getEmail()
        expect(mock).toBeCalled()
        mock.mockRestore()
    })
})
