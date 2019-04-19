---
order: 1
title: demo1
---

PC模板

````jsx
import TemplatePc from '{{ name }}';

class Demo extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <TemplatePc title="test" />
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
body {
  background: #fff;
}
````
