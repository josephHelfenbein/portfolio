export default function LabelItem (input:{label:string}){
    return (   
        <div className="flex justify-center">
            <h2 className="m-6 text-3xl font-semibold tracking-tighter">
                {input.label}
            </h2> 
        </div>
    )
}