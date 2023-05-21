import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="py-5">
        <h2 className="font-bold text-3xl">Refresh token:</h2>
        <p className="font-semibold ">
          As mentioned, for security purposes, access tokens may be valid for a
          short amount of time. Once they expire, client applications can use a
          refresh token to "refresh" the access token. That is, a refresh token
          is a credential artifact that lets a client application get new access
          tokens without having to ask the user to log in again. we can reduce
          the absolute token expiration time of tokens to reduce the security
          risks of storing tokens in local storage. This reduces the impact of a
          reflected XSS attack (but not of a persistent one). A refresh token
          may have a long lifespan by configuration. However, the defined long
          lifespan of a refresh token is cut short with refresh token rotation.
          The refresh is only valid within the lifespan of the access token,
          which would be short-lived.
        </p>
        <h2 className="font-bold text-3xl">Access token:</h2>
        <p className="font-semibold ">
          When a user logins in, the authorization server issues an access
          token, which is an artifact that client applications can use to make
          secure calls to an API server. When a client application needs to
          access protected resources on a server on behalf of a user, the access
          token lets the client signal to the server that it has received
          authorization by the user to perform certain tasks or access certain
          resources.
        </p>
      </div>
      <div className="py-5">
        <h2 className="font-bold text-3xl">No sql:</h2>
        <p className="font-semibold ">
          NoSQL is a non-relational database, meaning it allows different
          structures than a SQL database (not rows and columns) and more
          flexibility to use a format that best fits the data. The term “NoSQL”
          was not coined until the early 2000s. It doesn’t mean the systems
          don’t use SQL, as NoSQL databases do sometimes support some SQL
          commands. More accurately, “NoSQL” is sometimes defined as “not only
          SQL.”
        </p>
        <h2 className="font-bold text-3xl">Sql:</h2>
        <p className="font-semibold ">
          SQL, which stands for “Structured Query Language,” is the programming
          language that’s been widely used in managing data in relational
          database management systems (RDBMS).when storage was expensive, SQL
          databases focused on reducing data duplication.
        </p>
      </div>
      <div className="py-5">
        <h2 className="font-bold text-3xl">NestJs:</h2>
        <p className="font-semibold ">
          NestJS is a Node.js framework for building server-side applications.
          It is based on TypeScript and JavaScript.This framework is inspired by
          Angular, so most of what you find in Angular can also be found in
          Nest, including providers, middleware, components, and services. It is
          safe to say that Nest can be easily learned by Angular developers for
          any type of project.Nest makes use the Express HTTP framework by
          default. However, Nest is platform agnostic, meaning it can work with
          any Node HTTP framework. For example, it can optionally be configured
          to use Fastify, which can improve the Node framework.One of the cool
          things about NestJS is that anything supported in Express (i.e.,
          Express functions) is also supported in Nest.
        </p>
        <h2 className="font-bold text-3xl">Express Js:</h2>
        <p className="font-semibold ">
          Express is a Node.js web application framework that provides a wide
          range of functionality for constructing web and mobile applications.
          It is a layer built on top of Node that aids in the management of
          servers and routes.You can use Express with Node to create
          single-page, multi-page, or hybrid web applications. It supports the
          MVC architectural pattern for designing web applications: Model, View,
          and Controller
        </p>
      </div>
      <div className="py-5">
        <h2 className="font-bold text-3xl">MongoDB aggregate:</h2>
        <p className="font-semibold ">
          ggregation is a way of processing a large number of documents in a
          collection by means of passing them through different stages. The
          stages make up what is known as a pipeline. The stages in a pipeline
          can filter, sort, group, reshape and modify documents that pass
          through the pipeline.One of the most common use cases of Aggregation
          is to calculate aggregate values for groups of documents. This is
          similar to the basic aggregation available in SQL with the GROUP BY
          clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes
          further though and can also perform relational-like joins, reshape
          documents, create new and update existing collections, and so on.The
          input of the pipeline can be a single collection, where others can be
          merged later down the pipeline. The pipeline then performs successive
          transformations on the data until our goal is achieved. This way, we
          can break down a complex query into easier stages, in each of which we
          complete a different operation on the data. So, by the end of the
          query pipeline, we will have achieved all that we wanted. This
          approach allows us to check whether our query is functioning properly
          at every stage by examining both its input and the output. The output
          of each stage will be the input of the next.
        </p>
      </div>
      
    </div>
  );
};

export default Blog;
