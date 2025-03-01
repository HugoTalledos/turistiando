import { useState } from 'preact/hooks'

export function ImageGallery({ imageList }) {
    const [active, setActive] = useState(imageList[0])

    return (
        <div className="grid gap-4">
            <div>
                <img
                    className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                    src={active}
                    inferSize
                    alt=""
                />
            </div>
            <div className="grid grid-cols-5 gap-4">
                {imageList.length > 1 && imageList.map((imgelink, index) => (
                    <div key={index}>
                        <img
                            onClick={() => setActive(imgelink)}
                            src={imgelink}
                            className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                            alt="gallery-image"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
