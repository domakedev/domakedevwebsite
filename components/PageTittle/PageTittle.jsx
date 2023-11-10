const PageTittle = ({ title, preTitle }) => {
    return (
        <div className='mt-[33px]'>
            <span className='text-sm before:absolute before:-inset-1 before:-skew-y-3 before:bg-light-blue relative inline-block'>
                <span className="relative text-white">{preTitle}</span>
            </span>
            <h1 className='text-3xl font-bold mt-1'>{title}</h1>
        </div>
    )
}

export default PageTittle
