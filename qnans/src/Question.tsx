import React from 'react'

type QuestionProps = {
    title: string
    info: string
}

export default function Question({title,info}: QuestionProps) {
    const [showInfo, setShowInfo] = React.useState(false);
    return (
        <>
            <article className=" bg-red-100 w-96">
                    <header className="bg-red-200 grid grid-cols-3 gap-1 justify-evenly">
                        <h4 className="col-span-2 rounded-lg">{title}</h4>
                        <button className="bg-blue-200 col-span-1 m-2 p-2 rounded-3xl" onClick={() => setShowInfo(!showInfo)}>
                            {showInfo ? '-' : '+'}
                        </button>
                        {showInfo && <p className="col-start-1 col-end-4 col-span-3 max-w-xl">{info}</p>}
                    </header>

                    
            </article>
        </>
    );
}
