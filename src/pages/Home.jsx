const Home = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <div className="input-group">
            <input type="text" className="form-control" autoFocus={true} placeholder="Rechercher" />
            <button className="btn btn-primary" type="button">Rechercher</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
