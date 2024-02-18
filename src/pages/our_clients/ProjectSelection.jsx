import { allProjectNames } from './feed/data';
import './css/project_selection.css';
import PropTypes from 'prop-types';
import convertToTitleCase from '../../utils/convert_to_title_case';
import { useNavigate } from 'react-router-dom';

function ProjectSelection({ projectName }) {
  const navigate = useNavigate();

  const isActive = (name) => {
    return name == projectName;
  };

  const ProjectSelectionClickHandler = (name) => {
    navigate(`/our-clients/${name}`)
  };

  return (
    <div className="d-flex flex-wrap project-selection-container">
      <button type="button" onClick={()=>ProjectSelectionClickHandler('all')} className={`m-1 btn btn-sm btn-outline-primary ${isActive('all') && 'active-button'}`}>All</button>

      {allProjectNames.map((name) => {
        return (<button type="button" onClick={()=>ProjectSelectionClickHandler(name)} key={name} className={`m-1 btn btn-sm btn-outline-primary ${isActive(name) && 'active-button'}`}>{convertToTitleCase(name)}</button>)
      })}
    </div>
  )
}

ProjectSelection.propTypes = {
  projectName: PropTypes.string.isRequired,
}

export default ProjectSelection;