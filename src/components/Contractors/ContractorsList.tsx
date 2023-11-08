import ContractorItem from './ContractorItem'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const ContractorList = ({ contractors }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='contractors table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align='left'>Id</TableCell>
                        <TableCell align='left'>Type</TableCell>
                        <TableCell align='center'>Edit</TableCell>
                        <TableCell align='center'>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contractors.map(contractor => (
                        <ContractorItem
                            key={contractor.id}
                            contractor={contractor}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ContractorList
