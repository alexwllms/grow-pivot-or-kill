import styled from 'styled-components';

import { remCalc } from '../../utils/units';

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.globalMargin};
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${remCalc(10)};
`;

const Input = styled.input`
  display: block;
  margin-bottom: ${remCalc(0)};
  padding: ${remCalc(12)} ${remCalc(20)};
  width: 100%;
  text-align: center;
`;

export { FormGroup, Label, Input };
