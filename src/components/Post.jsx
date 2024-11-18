export default function Post(postsingle) {
  console.log(postsingle)
return (
<div>
  <h3>ID: {postsingle?.postsingle?.id}</h3>
  <h3>Title: {postsingle?.postsingle?.title}</h3>
  <h5>Body: {postsingle?.postsingle?.body}</h5>
</div>  )
}
  