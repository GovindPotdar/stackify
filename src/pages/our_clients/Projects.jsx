import { useEffect, useState } from 'react';
import CustomSection from '../../layouts/custom_section';
import Accordion from 'react-bootstrap/Accordion';
import './css/projects.css';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { getProjectImages } from './feed/data';
import ProjectSelection from './ProjectSelection';
import InfiniteScroll from 'react-infinite-scroll-component';
import convertToTitleCase from '../../utils/convert_to_title_case';
import { useParams } from 'react-router-dom';

function Projects() {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [projectImages, setProjectImages] = useState([]);
  const { projectName } = useParams();

  const fetchData = () => {
    const images = getProjectImages(projectName, page);
    setProjectImages([...projectImages, ...images])
    setPage(page + 1);
    setHasMore(images.length === 20);
  }

  useEffect(() => {
    const images = getProjectImages(projectName, 1);
    setProjectImages([...images])
    setPage(2);
    setHasMore(images.length === 20);
  }, [projectName])

  return (
    <CustomSection
      heading={(<h2><em>Projects</em></h2>)}
      bgGradientImage='repeating-linear-gradient(0deg, rgb(6, 6, 6) 0px, rgb(6, 6, 6) 1px, transparent 1px, transparent 21px), repeating-linear-gradient(90deg, rgb(6, 6, 6) 0px, rgb(6, 6, 6) 1px, transparent 1px, transparent 21px), linear-gradient(90deg, rgb(23, 23, 23), rgb(23, 23, 23))'
    >
      <div className='projects-container'>
        <Accordion defaultActiveKey="0" >
          <Accordion.Item eventKey="1">
            <Accordion.Header className='c-accordion-header'>
              Selected Project {convertToTitleCase(projectName)}
            </Accordion.Header>
            <Accordion.Body className='c-accordion-body'>
              <ProjectSelection projectName={projectName} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className='mt-3'>
        <InfiniteScroll
          dataLength={projectImages.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4 style={{color: '#fff', textAlign: 'center'}}><b>Loading...</b></h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        ><ResponsiveMasonry
          columnsCountBreakPoints={{ 320: 2, 426: 3, 767: 4, 1023: 5 }}
        >
            <Masonry>
              {projectImages.map((Img) => {
                return (
                  <img
                    key={Img.alt}
                    src={Img.src}
                    style={{ width: "100%", display: "block", borderRadius: 10 }}
                    alt={Img.alt}
                    className='p-1'
                    loading="lazy"
                  />
                )
              })}
            </Masonry>
          </ResponsiveMasonry>
        </InfiniteScroll>

      </div>
    </CustomSection>
  )
}

export default Projects;