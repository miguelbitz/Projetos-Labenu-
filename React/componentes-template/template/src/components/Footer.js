import React from "react";
import { RedesSociais } from "./RedesSociais"
import { Copywrite } from "./Copywrite"

export function Footer() {
    return (
        <div className="footer">
            <RedesSociais />
            <Copywrite />
        </div>
    )
}