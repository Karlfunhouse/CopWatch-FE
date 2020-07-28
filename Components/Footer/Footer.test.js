import React from 'react'
import Footer from './Footer'
jest.mock('react-native-vector-icons/FontAwesome')

import { render, fireEvent, waitFor } from "react-native-testing-library"

// test for buttons/text?
// test for clicking/routing?
describe('Footer', () => {
    it('', async () => {
        const { getByText } = render(<Footer />)

        const logIncident = await waitFor(() => getByText("Log An Incident"))

        expect(logIncident).toBeTruthy()
    })
})
