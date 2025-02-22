import { Box, Container } from "@mui/material";

import Create from "../section/Create";
import TodoTable from "../section/TodoTable";

export default function Todo() {    
    return (
        <Container sx={{ flexGrow: 1, fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"}}>
            <Create/>
            &nbsp;
            <TodoTable/>
        </Container>
    )
}