import React from 'react';
import API from './API';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'React Image Search',
      searchTerm: '',
      loading: false,
      images: []
    };
  }

  formSubmitted(event) {
    event.preventDefault();

    this.setState({
      loading: true,
      images: []
    })

    API.search(this.state.searchTerm)
      .then(images => {
        this.setState({
          loading: false,
          images
        })
      })
  }

  searchTermChanged(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    const { title, searchTerm, loading, images } = this.state; // destructuring
    return (
      <div>
        <h1>{title}</h1>
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="searchTerm">Search Term</label>
          <input onChange={(event) => this.searchTermChanged(event)} value={searchTerm} className="u-full-width" type="text" id="searchTerm" name="searchTerm" autoComplete="off" />
          <button type="submit">Search</button>
        </form>
        {loading ? <img src="https://i.imgur.com/LVHmLnb.gif" alt="loading ice cream"></img> : ''}
        <section className="images">
          {images.map((image, i) => {
            return <img key={image.id} alt={image.alt_description} src={image.urls.small}/>
          })}
        </section>
      </div>
    );
  }
}

export default App;
