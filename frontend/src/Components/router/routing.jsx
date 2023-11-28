import {BrowserRouter, Route, Routes} from "react-router-dom";

// import les page ici !!!

const BugTrackerRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TicketList/>}/>
                <Route path="/ticket/:id/update" element={<TicketCreate/>}/>
                <Route path="/ticket/create" element={<TicketCreate/>}/>
                <Route path="/ticket/:id" element={<TicketSingle/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default BugTrackerRouter;