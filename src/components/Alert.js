function Alert({ alert }) {
  const capitalised = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };
  return (
    <div className="alertBox">
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalised(alert.type)}</strong> : {alert.message}
        </div>
      )}
    </div>
  );
}

export default Alert;
