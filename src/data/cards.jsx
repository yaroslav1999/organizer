const cardsData=[
    {
        "id": 1,
        "title": "Дело №1",
        "body": "Это описание задачи11",
        "date":"2022-11-05",
        "time":"12:30",
        "priority":"red",
        "tags":["#tag1","#tag2"]
    },
    {
        "id": 2,
        "title": "Дело №22",
        "body": "Это описание задачи22",
        "date":"2022-11-05",
        "time":"10:30",
        "priority":"orange",
        "tags":["#tag1","#tag3"]
    },
    {
        "id": 3,
        "title": "Дело №3",
        "body": "Это описание задачи33",
        "date":"2022-11-05",
        "time":"17:30",
        "priority":"green",
        "tags":["#tag1","#tag3"]
    },
  ];
  


  export default cardsData;

//   <Modal title="Редактирование карточки" open={isAddModalActive} footer={null}>
//             <Form  onFinish={saveInfo} initialValues={newCard} >
//                 <Form.Item  name="title"
//                     rules={[ { required: true, message: "Название карточки обязательно!" } ]}>
//                     <Input onChange={onTitleChange} />
//                 </Form.Item>

//                 <Form.Item name="body" rules={[ { required: true, message: "Запоните это поле" } ]}>
//                     <Input   onChange={onBodyChange} />
//                 </Form.Item>

//                 <Form.Item name="radio" rules={[ { required: true, message: "Выберите приоритет" } ]}>
//                     <Radio.Group options={optionsRadio} onChange={onRadioChange} value={"red"} optionType="button" />
//                 </Form.Item>

//                 <Form.Item rules={[ { required: true, message: "Запоните это поле" } ]}>
//                     <DatePicker name="date" defaultValue={moment(selectedDate, formatDate)} onChange={onDataChange} />
//                 </Form.Item>
                
//                 <Form.Item name="time" rules={[ { required: true, message: "Запоните это поле" } ]}>
//                     <TimePicker  format={formatTime} onChange={onTimeChange} />
//                 </Form.Item>
//                 {/* <TimePicker defaultValue={moment('12:08', format)} format={format} /> */}
//                 <Form.Item name="tags">
//                     <Select mode="tags"style={{width: '100%',}}  placeholder="Tags Mode" onChange={onTagsChange} options={tagsCollection} />
//                 </Form.Item>

//                 <Button type="primary" htmlType="submit">Сохранить</Button>
//                 <Button onClick={onCancel} type="primary">Выйти</Button>
//             </Form>
//         </Modal>


// const onTitleChange=(e)=>{
//     // newCard.title=e.target.value;
// }
// const onBodyChange=(e)=>{
//     // newCard.body=e.target.value;
// }
// const onRadioChange=(e)=>{
//     // newCard.priority=e.target.value;
// }
// const onDataChange=(date, dateString)=>{
//     // newCard.date=cardDataLocal.date;
// }
// const onTimeChange=(time, timeString)=>{
//     // newCard.time=timeString;
// }
// const onTagsChange=(element)=>{
//     // newCard.tags=element;
// }