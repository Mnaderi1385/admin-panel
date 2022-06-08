

const Title = (props) => {
    return <h1 className="text-center text-lg md:text-2xl font-bold animate-pulse text-slate-600 dark:text-slate-50 my-4">{ props.children }</h1>
}

export default Title;