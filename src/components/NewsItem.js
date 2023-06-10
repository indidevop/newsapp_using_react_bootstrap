import React from 'react'

const NewsItem =(props)=> {

    
        const { title, description, imageUrl, newsUrl, author, date,source } = props;
        return (
            <div>
                <div className="card">
                    <img src={imageUrl ? imageUrl : "https://external-preview.redd.it/WwRvhw1lvF6-49k0cB-CnFpGPg7NVMpmQcDuedrvzRA.jpg?width=640&crop=smart&auto=webp&s=9578703e272cf5f0a306be77558b9e23454691b3"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <span className="badge bg-success">{source.name}</span>
                        <p className="card-text"><small className="text-muted">By {author} on {(new Date(date)).toUTCString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem