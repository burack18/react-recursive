import FolderIcon from '@mui/icons-material/Folder';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

function App({data}) {
  const getIcon=(type)=>{
    console.log(type);
    switch (type) {
      case 'Folder':
        return <FolderIcon/>
        break;
        case 'video':
          console.log(type);
        return <VideocamIcon/>
        break;
        case 'jpg':
          return <ImageIcon/>
        break;
        case 'file':
          return <InsertDriveFileIcon/>
      default:
        break;
    }
  }


  return (
    <div className="App" >
     {
     data.map(item=>{
       return (
         <ul >  
               
            <li style={{marginLeft:'15px'}}><div style={{display:'flex',alignItems:'center'}}> {getIcon(item.type)}  {item.name}</div></li>          
              {item.type=='Folder'&&<App data={item.children} />}        
         </ul>
       )
      })
    }
    </div>
  );
}

export default App;
