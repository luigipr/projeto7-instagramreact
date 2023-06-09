let obj = [
    { imagem :"assets/img/9gag.svg",nome: '9gag'},
    { imagem: "assets/img/meowed.svg", nome: 'meowed'},
    { imagem: "assets/img/barked.svg", nome: 'barked'},
    { imagem: "assets/img/nathanwpylestrangeplanet.svg", nome: 'nathanwpylestrangeplanet'},
    { imagem: "assets/img/wawawicomics.svg", nome: 'wawawicomics'},
    { imagem: "assets/img/respondeai.svg", nome: 'respondeai'},
    { imagem: "assets/img/filomoderna.svg", nome: 'filomoderna'},
    { imagem: "assets/img/memeriagourmet.svg", nome: 'memeriagourmet'},
]



function Story(props) {
    console.log(props)
    return (
    <div className="story" >
        <div className="imagem">
            <img src={props.imagem} alt={props.nome}/>
        </div>
        <div className="usuario">
            {props.nome}
        </div>
    </div>
)}



export default function Stories() {
    
    return (
    <div className="stories" >
    {obj.map((i) => {
        return <Story key={i.nome} imagem={i.imagem} nome={i.nome} />
    })} 
    <div className="setinha">
    <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
</div>
)}



















