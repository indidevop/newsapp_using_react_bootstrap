import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



const News =(props)=> {

const [articles, setarticles] = useState([])
const [loading, setloading] = useState(false)
const [page, setpage] = useState(1)
const [totalResult, settotalResult] = useState(0)

    const capitalze=(str)=> {
        return str.charAt(0).toUpperCase() + str.slice(1,);
    }



    const updateNews=async ()=> {

        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setloading(true)
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(70);

        setarticles(parsedData.articles)
        settotalResult(parsedData.totalResults)
        setloading(false)
        props.setProgress(100);
        
    }
    useEffect(() => {
      updateNews()  
      document.title = capitalze(props.category) + " | NewsMonkey";

    }, [])
    


   

    const previousClickhandler = async () => {

        setpage(page-1)
        updateNews()

    }
    const nextClickhandler = async () => {

        setpage(page+1)
        updateNews()


    }


    
        return (

            <div className='container my-3'>

                <h2 className='text-center' style={{marginTop:'75px',marginBottom:'20px'}}>Top Headlines - {capitalze(props.category)}</h2>
                {loading && <Spinner />}

                <div className="row g-4">
                    
                    {!loading && articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source} />
                        </div>
                    })}


                </div>



                <div className="container d-flex justify-content-around my-4">
                    <button disabled={page <= 1} className="btn btn-dark" onClick={previousClickhandler}>&larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResult / 21)} className="btn btn-dark" onClick={nextClickhandler}>Next &rarr;</button>
                </div>
            </div>
        )
    
}


News.defaultProps = {
    country: "in",
    pageSize: 20,
    category: "general",

}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}


export default News