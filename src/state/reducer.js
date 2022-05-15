const reducer = (state, action) => {
  switch(action.type){
    case 'get-categories':
      const newStateWithAllCategories = {...state, categoryList: action.payload}
      return newStateWithAllCategories
    case 'create-category':
      const previousCategoyList = [...state.categoryList, action.payload]
      const newStateWithCategoryAdded = {...state, categoryList: previousCategoyList}
      return newStateWithCategoryAdded
    case 'deleteCategory':
      const newListWithoutCategory = state.categoryList.filter(category => category.id !== action.payload)
      const newStateWithoutCategory = {...state, 
      categoryList: newListWithoutCategory}
      return newStateWithoutCategory
    case 'add-note':
      const categoryToAddNote = state.categoryList.find(category => category.id === action.payload.categoryId)

      const categoryWithNoteAdded = {...categoryToAddNote,
      notes: [...categoryToAddNote.notes, action.payload]} 

      const newCategoryListWithNoteAdded = state.categoryList.map(category => category.id === action.payload.categoryId?categoryWithNoteAdded:category)

      const newStateWithNoteAdded = {...state,
      categoryList: newCategoryListWithNoteAdded}
      return newStateWithNoteAdded
    case 'delete-note':
      const categoryToDeleteNote = state.categoryList.find(category => category.id === action.payload.categoryId)

      const listWithoutNote = categoryToDeleteNote.notes.filter(note => note.id !== action.payload.id)
      const categoryWithoutNote = {...categoryToDeleteNote,
      notes: listWithoutNote} 

      const newCategoryListWithoutNote = state.categoryList.map(category => category.id === categoryToDeleteNote.id?categoryWithoutNote:category)

      const newStateWithoutNote = {...state,
      categoryList: newCategoryListWithoutNote}
      return newStateWithoutNote
    case 'update-note':
      const categoryToUpdateNote = state.categoryList.find(category => category.id === action.payload.categoryId)

      const listWithNoteUpdated = categoryToUpdateNote.notes.map(note => note.id === action.payload.id?action.payload:note)
      const categoryWithNoteUpdated = {...categoryToUpdateNote,
      notes: listWithNoteUpdated} 

      const newCategoryListWithNoteUpdated = state.categoryList.map(category => category.id === categoryToUpdateNote.id?categoryWithNoteUpdated:category)

      const newStateWithNoteUpdated = {...state,
      categoryList: newCategoryListWithNoteUpdated,
      note: {
        id: '',
        message: '',
        done: false,
        categoryId: ''
      }}
      return newStateWithNoteUpdated
    case 'add-note-to-be-updated':
      const newStateWithNoteToBeUpdated = {
        ...state,
        note: action.payload
      }
      return newStateWithNoteToBeUpdated
    case 'create-tag':
      const categoryToAddTask = state.categoryList.find(c => c.notes.find(n => n.id === action.payload.noteId))
      console.log(state.categoryList)
      const noteToAddTask = categoryToAddTask.notes.find(n => n.id === action.payload.noteId)
      const noteWithTagAdded = { ...noteToAddTask, tags: [...noteToAddTask.tags, action.payload] }
      const newNoteList = categoryToAddTask.notes.map(n => n.id === action.payload.noteId ? noteWithTagAdded : n)
      const NewCategoryWithNotesWithNewTag = {...categoryToAddTask,notes: newNoteList}
      const newCategoryList=state.categoryList.map(cat => cat.id===noteWithTagAdded.categoryId?NewCategoryWithNotesWithNewTag:cat)
      const newstate= {...state,categoryList:newCategoryList}
      return newstate
  }
}

export default reducer
