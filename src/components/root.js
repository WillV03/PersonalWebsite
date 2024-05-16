import React from "react";
import Nav from "./nav";
import { Outlet } from "react-router";
import styled from "styled-components";

const Body = styled.div`
display: flex;
`

export default function Root(){
    return(
        <>
        <Nav/>
        <Body>
            <React.Suspense fallback={<Loading/>}>
                <Outlet/>
            </React.Suspense>
        </Body>
        </>
    )
}