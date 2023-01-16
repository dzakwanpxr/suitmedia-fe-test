import valueData from "../valueData"

valueData

function Value() {
    const valueElement = valueData.map(item => {
        return (
            <div className="value-item" key={item.title} style={{backgroundColor: `${item.backgroundColor}`}}>
                <img 
                    src={`/${item.img}`} 
                    alt="value-img" 
                    className="value-img"
                    />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        )
      })
    
    return(
        <section className="container">
            <h1 className="section-title">OUR VALUE</h1>
            <div className="value-content">
                {valueElement}
            </div>

        </section>
    )
}

export default Value