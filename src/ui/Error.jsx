import { useRouteError, isRouteErrorResponse, useNavigate } from "react-router-dom";
import styles from "./Error.module.css";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  
  let errorMessage = "Something went wrong.";
  let errorStatus = "Error"; 

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  }

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        
        <h1 className={styles.errorStatus}>
          <b>{errorStatus}.</b> <span className={styles.grayText}>That's an error.</span>
        </h1>
        
        <p className={styles.errorMessage}>
          The requested content could not be loaded. ({errorMessage})
          <br />
          <br />
          <span className={styles.grayText}>That’s all we know.</span>
        </p>
        <button className={styles.errorButton} onClick={() => navigate(-1)}>
          Back
        </button>
        
      </div>
    </div>
  );
}

export default Error;