import { MetaFunction, LinksFunction, LoaderFunction, Link } from 'remix'
import { useRouteData } from 'remix'

export let meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  }
}

// export let links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: stylesUrl }];
// };

export let loader: LoaderFunction = async () => {
  return { message: 'this is awesome 😎' }
}

export default function Index() {
  let data = useRouteData()

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome to Default/Index App!</h2>
      <p>
        <a href="https://remix.run/dashboard/docs">Check out the docs</a> to get
        started.
      </p>
      <ul>
        <li>
          <Link to="about">About Default/Index App</Link>
        </li>
        <li>
          <Link to="app2">Go to App 2</Link>
        </li>
        <li>
          <a href="standalone">Go to standalone</a>
        </li>
        <li>
          <a href="parent">Get Parent (HTML)</a>
        </li>
        <li>
          <a href="parent/child">Get Parent/Child (HTML)</a>
        </li>
        <li>
          <a href="parent?format=json">Get Parent (JSON)</a>
        </li>
        <li>
          <a href="parent/child?format=json">Get Child (JSON)</a>
        </li>
        <li>
          <a href="parent/child?format=json&includeParent">
            Get Parent/Child (JSON)
          </a>
        </li>
      </ul>
      <p>Message from the loader: {data.message}</p>
    </div>
  )
}
