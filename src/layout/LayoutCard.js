function LayoutCard({ children, title }) {
  return (
    <div className="card shadow mb-4 text-left">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default LayoutCard;
