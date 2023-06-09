import styled from 'styled-components'

export const CourseDetailsPageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-5);
`

export const CourseDetailsCenterBox = styled.div`
  width: 629px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-6) var(--spacing-8);
  gap: var(--spacing-6);
  background: var(--white);
  box-shadow: 0 var(--spacing-2) var(--spacing-2) rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius-1);
`
