const Manager = require("../lib/manager.js")

describe("Manager Class", () => {
    test('Test if Manager class returns correct information for each function: ', () => {
        let man = new Manager('Marcus Lewis', '11111', 'lewisemarcus@gmail.com', '(800) 432-1000')
    
        expect(man.name).toEqual(expect.any(String))
        expect(man.id).toEqual(expect.any(Number))
        expect(man.email).toEqual(expect.any(String))
        expect(man.officeNumber).toEqual(expect.any(String))
    
        expect(man.getName()).toBe(man.name)
        expect(man.getId()).toBe(man.id)
        expect(man.getRole()).toBe('Manager')
        expect(man.getEmail()).toBe(man.email)
        expect(man.getOfficeNumber()).toBe(man.officeNumber)
    })
    test('If no information is passed through, expect error', () => {
        const cb = () => new Manager()
        const error = new Error(
            "Expected parameters 'name, id, email, officeNumber' to be non empty strings."
        )
        expect(cb).toThrowError(error)
    })
    test('If incorrect format information is passed through, expect error', () => {
        const cb = () => new Manager('Marcus', 'not a number', 'not an email', 'not a phone number')
        const error = new Error("Expected correct format of parameters")
        expect(cb).toThrowError(error)
    })
    test('spyon attemt', () => {
        const man = new Manager('Marcus Lewis', '11111', 'lewisemarcus@gmail.com','(800) 100-4534')
        const mock = jest.spyOn(man, 'getOfficeNumber').mockImplementation(() => {})
        man.getOfficeNumber()
        expect(mock).toBeCalled()
        mock.mockRestore()
    })
})