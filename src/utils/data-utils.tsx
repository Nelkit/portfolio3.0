class DataUtils {
    getAboutInfo = (contentfulData:AllContentfulObject):About=>{
        const {edges} = contentfulData;

        if (edges !== undefined && edges !== null){
            // @ts-ignore
            return edges[0].node as About
        }else{
            return {} as About
        }
    }
}

export default DataUtils