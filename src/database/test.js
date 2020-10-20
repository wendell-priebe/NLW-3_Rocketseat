const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    //// inserir dados na tabela
    await saveOrphanage(db, {
        lat : "-31.3854038",
        lng : "-52.6985493",
        name : "Lar das meninas",
        about : "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
        whatsapp : "984334466",
        images : [
            "https://images.unsplash.com/photo-1576883600124-64c5aa68b4bc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1570473546580-f647e3e3efd2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions : "Venha como se sentir a vontade e traga muito amor e paciencia para dar",
        opening_hours : "Horário de visitas Das 8h até as 18h",
        open_on_weekends : "0" 
    })
    //// consulta dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    
    //// consultar somente 1 orphanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    //// deletar dado da tabela
    const testDelete = await db.run("DELETE FROM orphanages WHERE id = '3'")
    console.log(testDelete)
})