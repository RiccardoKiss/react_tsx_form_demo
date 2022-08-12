import { Button, Text, Circle, Icon } from './styles/contributionChoice';

export default function ContributionChoice ({ children, ...props }: { isSelected: boolean, left?: boolean, right?: boolean, children: any }): JSX.Element {
  return <Button { ...props }>{ children }</Button>;
}

ContributionChoice.Text =  function ContributionChoiceText ({ children, ...props }: { isSelected: boolean, children: any }): JSX.Element {
  return <Text { ...props }>{ children }</Text>;
}

ContributionChoice.Circle =  function ContributionChoiceCircle ({ children, ...props }: { children: any }): JSX.Element {
  return <Circle { ...props }>{ children }</Circle>;
}

ContributionChoice.Icon =  function ContributionChoiceIcon({ ...props } : { isSelected: boolean, src: any }): JSX.Element {
  return <Icon { ...props } />;
}
