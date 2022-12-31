const path=require('path')

module.exports={
    webpack:{
        alias:{
            '@':path.join(path.resolve(__dirname,'./src')),
            '@components':path.join(path.resolve(__dirname,'./src/components')),
            '@navigation':path.join(path.resolve(__dirname,'./src/components/navigation')),
            '@data':path.join(path.resolve(__dirname,'./src/data')),
            '@hooks':path.join(path.resolve(__dirname,'./src/hooks')),
            '@styles':path.join(path.resolve(__dirname,'./src/styles')),
            '@themes':path.join(path.resolve(__dirname,'./src/themes'))
        }
    }
}