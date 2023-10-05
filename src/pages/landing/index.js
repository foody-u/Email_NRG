import { Input } from "@chakra-ui/react";
import { useState } from "react";



export default function Page() {
    const [html, setHtml] = useState()

    if (html) {
        return <div dangerouslySetInnerHTML={html} />;
    }

    return (
        <form onSubmit={async (e) => {
            e.preventDefault();
            const res = await fetch("/api/password");
            console.log(res);

        }}>
            <input type="text" />
            <button type="submit">Submit</button>
        </form>
    )
}