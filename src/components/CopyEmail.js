// MyComponent.tsx
import React, { useState } from "react";
import { Alert, AlertTitle } from "@mui/material";

const MyComponent = () => {
    const [textToCopy, setTextToCopy] = useState(
        "nuansa.corprelations@gmail.com"
    );
    const [showAlert, setShowAlert] = useState(false);

    const handleCopyToClipboard = () => {
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                setShowAlert(true);
            })
            .catch((error) => {
                console.error("Failed to copy to clipboard:", error);
            });
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <div>
            <div>
                <h2
                    className="text-nuansa-page-email"
                    onClick={handleCopyToClipboard}
                >
                    Email us at {textToCopy}
                </h2>
            </div>
            <div>
                {/* Material-UI Alert component */}
                {showAlert && (
                    <Alert className="container-alert" severity="info" onClose={handleCloseAlert}>
                        Email address copied to clipboard: {textToCopy}
                    </Alert>
                )}
            </div>
        </div>
    );
};

export default MyComponent;
