import { useEffect, useState } from 'react'
import ContractorItem from './ContractorItem'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Loader from '../Loader'
import API from '../../api'

const ContractorList = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        API('GET', '')
            .then(result => {
                setData(result)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    const handleEdit = id => {
        console.log('edit ' + id)
    }

    const handleDelete = id => {
        API('DELETE', id)
            .then(() => {
                console.log('delete ' + id)
                const newData = data.filter(item => item.id !== id)
                setData(newData)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='contractors table'>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align='left'>Name</TableCell>
                        <TableCell align='left'>Id</TableCell>
                        <TableCell align='left'>Type</TableCell>
                        <TableCell align='center'>Edit</TableCell>
                        <TableCell align='center'>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data ? (
                        data.map(contractor => (
                            <ContractorItem
                                key={contractor.id}
                                contractor={contractor}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                            />
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={6}>
                                <Loader />
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ContractorList
