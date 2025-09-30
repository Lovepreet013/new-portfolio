import { ExternalLink } from "lucide-react"

const CertificatesSection = () => {

    const certificates = [
        {
            name : "Developing Front-End Apps with React",
            src : "./public/IBM.png",
            link : "https://www.coursera.org/account/accomplishments/verify/69Z6FUEIBO0D",
            company : "IBM"
        },
        {
            name : "Developing Back-End Apps with Node.js and Express",
            src : "./public/IBM.png",
            link : "https://www.coursera.org/account/accomplishments/verify/5I2DAY8CYDT7",
            company : "IBM"
        },
        {
            name : "JavaScript: The Hard Parts",
            src : "./public/frontend-masters-social-preview.png",
            link : "https://drive.google.com/file/d/1eNgRYOe0U3U12CeiecsY9nII09C6ca4H/view",
            company : "Frontend Masters"
        },
    ]

    return(
        <div className="mt-4 pb-3 border-b-1 border-gray-800">
            <h1 className="text-2xl text-gray-200 font-normal">Certificates</h1>
            <div className="flex items-center justify-between">
                <p className="text-gray-400 text-[15px] mt-2">I got some certificates to show, here they are</p>
            </div>


            {certificates.map((cert) => (
                <a href={cert.link} key={cert.name} target="_blank">
                <div className="flex border rounded-md p-1 border-gray-800 items-center hover:border-gray-700 hover:bg-[#131212] my-4 transition-transform duration-300 hover:scale-101 ease-in-out">
                    <div className=" h-12 w-12">
                        <img src={cert.src} alt={cert.name} className="w-full h-full rounded-md object-cover"/>
                    </div>
                    <div className="mx-2 flex w-[90%] justify-between">
                        <div>
                            <h1 className="text-gray-200">{cert.name}</h1>
                            <p className="text-gray-500 text-sm">{cert.company}</p>
                        </div>
                        <p className="mt-2">
                        <ExternalLink size={20}/>
                        </p>
                    </div>
                </div>
            </a>
            ))}
            
        </div>
    )
}

export default CertificatesSection